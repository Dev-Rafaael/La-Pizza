import  { useState } from 'react'
import styles from '../styles/Login.module.css'
function Login() {
    const [email, setEmail] = useState( ''); 
  const [senha, setSenha] = useState('');
     const [loading, setLoading] = useState(false);
  return (
    <form  className={styles.loginForm}>
      <div className={styles.loginContent}>
        <h2>ENTRAR</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <div className={styles.btnLogin}>
          <button type="submit" className={styles.btnEntrar} disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          <button type="button"  className={styles.btnFechar}>Cancelar</button>
        </div>
      </div>
    </form>
  )
}

export default Login
