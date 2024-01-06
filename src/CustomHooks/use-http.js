import axios from "axios";


const useHttp = () => {
    

    const postData = async (userdata) => {
        try {
          await axios.post("http://localhost:8080/user", userdata);
          console.log("Daten erfolgreich gesendet");
        } catch (error) {
          console.error("Fehler beim Senden der Daten:", error);
         
        }
      };

    const logoutRequest = async (resHandler) => {

      
    };


    return {
        postData,
        logoutRequest
    };
};

export default useHttp;