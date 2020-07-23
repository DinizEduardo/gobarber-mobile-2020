import React, { useState, useCallback, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

const SignIn: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

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
              <Title>Faça seu logon</Title>
            </View>
            <Input name="Email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('deu');
              }}
            >
              Entrar
            </Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {!isOpened && (
        <CreateAccountButton onPress={() => {}}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountText>Criar uma conta</CreateAccountText>
        </CreateAccountButton>
      )}
    </>
  );
};

export default SignIn;
