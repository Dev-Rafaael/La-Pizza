
import styles from '../styles/Login.module.css'
import useLogin from '../hooks/useLogin'
function Login() {
const {email, setEmail,senha, setSenha,loading,handleSubmit} = useLogin()
  return (
    <form  className={styles.loginForm} onSubmit={handleSubmit}>
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
