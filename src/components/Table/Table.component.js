import React, { useEffect, useState } from 'react';
import { DataTable, Text } from 'react-native-paper';
import Loader from '../Loader/Loader.component';
import ApiRequest from '../../services/api';
import { ScrollView } from 'react-native';
import styles from './Table.styles';

const header = ['Name', 'Family', 'Sugar', 'Protein', 'Calories', 'Fat'];
const optionsPerPage = [5, 10, 15];

export default function Table(props) {
  const { switcher } = props;
  const [dataFetch, setDataFetch] = useState([]);
  const [page, setPage] = useState(0);

  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(
    optionsPerPage[0]
  );
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, dataFetch.length);

  const [openLoader, setOpenLoader] = useState(false);

  useEffect(() => {
    setOpenLoader(true);
    ApiRequest().then((resp) => {
      setDataFetch(resp);
      setOpenLoader(false);
    });
  }, []);

  useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);

  return (
    <ScrollView>
      <DataTable
        style={[switcher ? styles.tableLight : styles.tableDark, styles.table]}
      >
        <DataTable.Header>
          {header.map((title, index) => {
            return (
              <DataTable.Title index={index} style={styles.textCenter}>
                <Text
                  index={index}
                  style={switcher ? styles.titleLight : styles.titleDark}
                >
                  {title}
                </Text>
              </DataTable.Title>
            );
          })}
        </DataTable.Header>
        {openLoader ? (
          <Loader openLoader={openLoader} />
        ) : (
          dataFetch.slice(from, to).map((data, index) => {
            return (
              <DataTable.Row index={index}>
                <DataTable.Cell index={index}>
                  <Text
                    index={index}
                    style={switcher ? styles.textLight : styles.textDark}
                  >
                    {data.name}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell index={index}>
                  <Text
                    index={index}
                    style={switcher ? styles.textLight : styles.textDark}
                  >
                    {data.family}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell index={index} style={styles.textCenter}>
                  <Text
                    index={index}
                    style={switcher ? styles.textLight : styles.textDark}
                  >
                    {data.nutritions.protein}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell index={index} style={styles.textCenter}>
                  <Text
                    index={index}
                    style={switcher ? styles.textLight : styles.textDark}
                  >
                    {data.nutritions.calories}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell index={index} style={styles.textCenter}>
                  <Text
                    index={index}
                    style={switcher ? styles.textLight : styles.textDark}
                  >
                    {data.nutritions.sugar}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell index={index} style={styles.textCenter}>
                  <Text
                    index={index}
                    style={switcher ? styles.textLight : styles.textDark}
                  >
                    {data.nutritions.fat}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        )}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(dataFetch.length / numberOfItemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${dataFetch.length}`}
          numberOfItemsPerPageList={optionsPerPage}
          numberOfItemsPerPage={numberOfItemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={null}
          style={{ display: 'flex', justifyContent: 'center', marginLeft: -30 }}
        />
      </DataTable>
    </ScrollView>
  );
}
