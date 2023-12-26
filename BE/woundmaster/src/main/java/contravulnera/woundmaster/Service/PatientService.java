package contravulnera.woundmaster.Service;

import contravulnera.woundmaster.dao.PatientDao;
import contravulnera.woundmaster.dao.UserDao;
import contravulnera.woundmaster.exception.DuplicateResourceException;
import contravulnera.woundmaster.exception.ResourceNotFoundException;
import contravulnera.woundmaster.model.Patient;
import contravulnera.woundmaster.model.User;
import contravulnera.woundmaster.registrationRequest.PatientRegistrationRequest;
import contravulnera.woundmaster.updateRequest.PatientUpdateRequest;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PatientService {

    private final PatientDao dao;
    private final UserDao userDao;

    public PatientService(@Qualifier("patientJpa") PatientDao dao,@Qualifier("jpa") UserDao userDao) {
        this.dao = dao;
        this.userDao = userDao;
    }

    //LIST
    public List<Patient> getAll(){
        return dao.selectAllPatient();
    }

    //GET
    public Patient getById(Long id){
        return dao.selectPatientById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "paziente con id [%s] non trovato".formatted(id)
        ));
    }

    public Patient getByUsername(String username){
        return dao.selectPatientByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "paziente con username [%s] non trovato".formatted(username)
                ));
    }

    //ADD
    // Import necessari

    public void add(@NotNull PatientRegistrationRequest request) {
        String username = request.username();

        // Controlla se l'utente esiste già
        if (dao.existWithUsername(username)) {
            throw new DuplicateResourceException("Username già presente");
        }

        User user = userDao.selectUserByUsername(request.userUsername())
                .orElseThrow(() -> new NoSuchElementException( "utente con username [%s] non trovato".formatted(username)));


        // Crea e salva l'entità Patient con l'utente recuperato
        Patient patient = new Patient(
                request.username(),
                request.genre(),
                LocalDate.now(),
                request.dataNascita(),
                user
        );

        dao.insert(patient);
    }


    //delete
    public void deleteById(Long id){
        if (!dao.existWithId(id)) {

            throw new ResourceNotFoundException(
                    "paziente con id [%s] non è presente".formatted(id)
            );
        };
        dao.deleteById(id);
    }

    //update
    public void update(Long id, PatientUpdateRequest request){
        Patient patient = getById(id);
        boolean changes = false;

        if(request.username() != null && !request.username().equals(patient.getUsername())){

            if(dao.existWithUsername(request.username())){
                throw new DuplicateResourceException(
                        "username già presente"
                );
            }
            patient.setUsername(request.username());
            changes = true;
        }

        if(request.genre() != null && !request.genre().equals(patient.getGenre())){
            patient.setGenre(request.genre());
            changes = true;
        }

        if(request.dataNascita() != null && !request.genre().equals(patient.getDataNascita())){
            patient.setDataNascita(request.dataNascita());
            changes = true;
        }

        if(request.dataRegistrazione() != null && !request.dataRegistrazione().equals(patient.getDataRegistrazione())){
            patient.setDataRegistrazione(request.dataRegistrazione());
            changes = true;
        }

    }




}
