
import styles from '../styles/Footer.module.css'
function Footer() {
  return (
   <section className={styles.contato} id="id-contato">
    <h1>CONTATO</h1>
     <div className={styles.infoContato}>
        <ul>        
            
          <li><i className="fi fi-brands-instagram"></i><a href="#">LaPizza</a></li>  
            <li><i className="fi fi-rr-phone-call"></i><a href="#">4555-7777</a></li>
           <li><i className="fi fi-brands-whatsapp"></i><a href="#">98147-4757</a></li>
        </ul>
     </div>
   </section>
  )
}

export default Footer
