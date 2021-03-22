import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from '../SignInButton/styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = useState(false);

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type='button'>
      <FaGithub color='#04d361' />
      Evandro Marinho
      <FiX color='#737380' className={styles.xIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type='button'>
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  ) ;
}