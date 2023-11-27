import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';
import { updateEvento, insertEvento, deleteEvento } from '../services/Eventos.Services';

const GerEventos = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};


  const [show, setShow] = useState(false);
  const [tipo, setTipo] = useState('esporte');

  const [nomeEvento, setNomeEvento] = useState(null);
  const [nomeLocal, setNomeLocal] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [dataInicioEvento, setDataInicioEvento] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [horaInicioEvento, setHoraInicioEvento] = useState(moment(new Date()).format('HH:mm'));
  const [valorEntrada, setValorEntrada] = useState('');
  const [dataFimEvento, setDataFimEvento] = useState(moment(new Date()).format('DD/MM/YYYY'));


  useEffect(() => {
    if (item) {
      setTipo(item.tipo == 0 ? 'esporte' : 'showMusic');
      setNomeEvento(item.nomeEvento);
      setNomeLocal(item.nomeLocal);
      setEndereco(item.endereco);
      setBairro(item.bairro);
      setCidade(item.cidade);
      setEstado(item.estado);
      setDataInicioEvento(item.dataInicioEvento);
      setHoraInicioEvento(item.horaInicioEvento);
      setValorEntrada(item.valorEntrada);
      setDataFimEvento(item.dataFimEvento);

    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateEvento({
        tipo: tipo == 'esporte' ? 0 : 1,
        nomeEvento: nomeEvento,
        nomeLocal: nomeLocal,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        dataInicioEvento: dataInicioEvento,
        horaInicioEvento: horaInicioEvento,
        valorEntrada: valorEntrada,
        dataFimEvento: dataFimEvento,
        id: item.id,
      }).then(res => {
        navigation.goBack();
      });
    } else {
      insertEvento({
        tipo: tipo == 'esporte' ? 0 : 1,
        nomeEvento: nomeEvento,
        nomeLocal: nomeLocal,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        dataInicioEvento: dataInicioEvento,
        horaInicioEvento: horaInicioEvento,
        valorEntrada: valorEntrada,
        dataFimEvento: dataFimEvento,
      }).then(res => {
        navigation.goBack();
      });

    }
  };

  const handleExcluir = () => {
    deleteEvento(item.id).then(res => {
      navigation.goBack();
    });
  };

  return (
    <Container>
      <Header title={'Adicionar Eventos'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check-bold" onPress={handleSalvar} />
        {
          item &&
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />
        }
      </Header>
      <ScrollView style={{ flex: 1 }}>
        <Body>
          <View style={styles.containerRadio}>
            <RNPickerSelect
              onValueChange={(value) => setTipo(value)}
              items={[
                { label: 'Esportes', value: 'esporte' },
                { label: 'Exposicao/Feira', value: 'expo' },
                { label: 'Games', value: 'game' },
                { label: 'Gastronomia/Bebidas', value: 'gastronomia' },
                { label: 'Musica ao vivo', value: 'vivo' },
                { label: 'Musica Eletronica', value: 'eletronica' },
                { label: 'Shows', value: 'showMusic' },
              ]}
              value={tipo}
            />
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={moment(dataInicioEvento, 'DD/MM/YYYY').toDate()}
              mode={'date'}
              is24Hour={true}
              display="default"
              onTouchCancel={() => setShow(false)}
              onChange={(_event, date) => {
                setShow(false);
                setDataInicioEvento(moment(dataInicioEvento).format('DD/MM/YYYY'));
              }}
            />
          )}
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={moment(dataFimEvento, 'DD/MM/YYYY').toDate()}
              mode={'date'}
              is24Hour={true}
              display="default"
              onTouchCancel={() => setShow(false)}
              onChange={(_event, date) => {
                setShow(false);
                setDataFimEvento(moment(setDataFimEvento).format('DD/MM/YYYY'));
              }}
            />
          )}

          {/* <TouchableOpacity onPress={() => setShow(true)}>
            <Input
              label="Data"
              value={data}
              left={<TextInput.Icon name="calendar" />}
              editable={false}
            />
          </TouchableOpacity> */}

          <Input
            label="Nome evento"
            value={nomeEvento}
            onChangeText={(text) => setNomeEvento(text)}
            left={<TextInput.Icon icon="calendar-star" />}
            keyboardType="default"
          />

          <Input
            label="Local"
            value={nomeLocal}
            onChangeText={(text) => setNomeLocal(text)}
            left={<TextInput.Icon icon="calendar-star" />}
            keyboardType="default"
          />

          <Input
            label="Endereço"
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
            left={<TextInput.Icon icon="calendar-star" />}
            keyboardType="default"
          />

          <Input
            label="Bairro"
            value={bairro}
            onChangeText={(text) => setBairro(text)}
            left={<TextInput.Icon icon="calendar-star" />}
            keyboardType="default"
          />

          <Input
            label="Cidade"
            value={cidade}
            onChangeText={(text) => setCidade(text)}
            left={<TextInput.Icon icon="calendar-star" />}
            keyboardType="default"
          />

          <Input
            label="Estado"
            value={estado}
            onChangeText={(text) => setEstado(text)}
            left={<TextInput.Icon icon="calendar-star" />}
            keyboardType="default"

          />
          {<TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data evento"
            value={dataInicioEvento}
            onChangeText={(text) => setDataInicioEvento(text)}
            left={<TextInput.Icon icon="calendar" />}
          />
          </TouchableOpacity>}

          <Input
            label="Horário evento"
            value={horaInicioEvento}
            onChangeText={(text) => setHoraInicioEvento(text)}
            left={<TextInput.Icon icon="clock-time-nine-outline" />}
          />
          <Input
            label="Valor entrada"
            value={valorEntrada}
            onChangeText={(text) => setValorEntrada(text)}
            left={<TextInput.Icon name="currency-brl" />}
            keyboardType="numeric"
          />
          {<TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data fim evento"
            value={dataFimEvento}
            onChangeText={(text) => setDataFimEvento(text)}
            left={<TextInput.Icon icon="calendar" />}
          />
          </TouchableOpacity>}

          <Button
            mode="contained"
            icon="check-bold"
            style={styles.button}
            onPress={handleSalvar}>
            Salvar
          </Button>

          {item && (
            <Button
              mode="contained"
              icon="trash-can"
              color={"red"}
              style={styles.button}
              onPress={handleExcluir}>
              Excluir
            </Button>
          )}
        </Body>
      </ScrollView>
    </Container>
  );
};
GerEventos.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.object,
    }),
  }),
};
const styles = StyleSheet.create({
  containerRadio: {
    flexDirection: 'column',
  },
  button: {
    margin: 5,
  },
});

export default GerEventos;

