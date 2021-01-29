import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignIn from '../../pages/SignIn';

const mockedSignIn = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn,
  };
});

jest.mock('../../hooks/Auth', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe('SignIn page', () => {
  it('should containts email/password inputs', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
  });

  // it('should be able to sign in', async () => {
  //   const { getByPlaceholderText, getByText } = render(<SignIn />);

  //   const emailField = getByPlaceholderText('E-mail');
  //   const passwordField = getByPlaceholderText('Senha');
  //   const buttonElement = getByText('Entrar');

  //   fireEvent.changeText(emailField, {
  //     target: { value: 'johndoe@example.com' },
  //   });
  //   fireEvent.changeText(passwordField, { target: { value: '123456' } });

  //   console.log(fireEvent.changeText(buttonElement));
  // });
});
