

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import ContactInfo from '../components/ContactInfo.jsx';

const Contact = () => {

  const { alert, showAlert, hideAlert } = useAlert();


  return (
    <section className="c-space my-20 mb-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center  flex-col">
      <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen h-[750px] w-full" />
        <div className="contact-container !mt-[7rem] flex flex-col items-center justify-center">
          <h3 className="head-text">İletişime Geçebilirsin!</h3>
          <p className="text-lg text-white-600 mt-5 text-center">
            Her zaman yeni fırsatlara ve bağlantılara açığım. İletişime geçmek isterseniz, aşağıdaki adreslerden bana kolayca ulaşabilirsiniz.
          </p>
          <ContactInfo></ContactInfo>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
