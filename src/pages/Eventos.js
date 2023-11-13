import React, { useEffect, useState } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { List, Text, FAB as Fab } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import {useNavigation} from '@react-navigation/native';
import {getEventos} from '../services/Eventos.Services';

const Eventos = () => {

  const navigation = useNavigation();
  const[eventos, setEventos] = useState([])
  
  useEffect(() => {
    getEventos().then(dados => {
      console.log(dados);
      setEventos(dados);
    });
  }, []);


  const renderItem = ({ item }) => (
    <List.Item
      title={item.nomeEvento + ' \n ' + item.nomeLocal}
      description={
        item.endereco +
        '\n' +
        'Bairro: ' +
        item.bairro +
        ' ' +
        '\n' +
        'Cidade: ' +
        item.cidade +
        '\n'
      }
      titleNumberOfLines={2}
      descriptionNumberOfLines={6}
      left={(props) => <List.Icon {...props} icon="alien" />}
      right={(props) => (
        <Text {...props}>
          {'\n' +
            'Data: ' +
            item.dataInicioEvento +
            '\n' +
            'Horário: ' +
            item.horaInicioEvento +
            '\n' +
            'Entrada: R$:' +
            item.valorEntrada}
        </Text>
      )}
      onPress={() => navigation.navigate('Adicionar Eventos', {item})}
    />
  );
  return (
    <Container>
    <Header title={'Eventos'} goBack={navigation.goBack}></Header>

      <Body>
        <FlatList
          data={eventos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          
        />
        <Fab
          style={styles.Fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Adicionar Eventos')}
        />
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
    Fab: {
      position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    }
});

export default Eventos;
