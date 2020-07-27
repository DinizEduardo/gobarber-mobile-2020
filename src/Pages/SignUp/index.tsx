import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [isOpened, setIsOpened] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const opened = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closed = useCallback(() => {
    setIsOpened(false);
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', opened);
    Keyboard.addListener('keyboardDidHide', closed);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={data => console.log(data)}
              style={{ width: '100%' }}
            >
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {!isOpened && (
        <BackToSignInButton onPress={() => navigation.goBack()}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignInButton>
      )}
    </>
  );
};

export default SignIn;
