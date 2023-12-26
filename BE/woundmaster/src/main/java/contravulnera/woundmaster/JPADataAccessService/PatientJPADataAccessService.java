package contravulnera.woundmaster.JPADataAccessService;

import contravulnera.woundmaster.dao.PatientDao;
import contravulnera.woundmaster.model.Patient;
import contravulnera.woundmaster.repository.PatientRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("patientJpa")
public class PatientJPADataAccessService implements PatientDao {

    private final PatientRepository repository;

    public PatientJPADataAccessService(PatientRepository repository) {
        this.repository = repository;
    }

    //GET
    @Override
    public List<Patient> selectAllPatient() {
       return repository.findAll();
    }

    @Override
    public Optional<Patient> selectPatientById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Patient> selectPatientByUsername(String username) {
        return repository.findByUsername(username);
    }

    //ADD
    @Override
    public void insert(Patient patient) {
        repository.save(patient);
    }

    //EXIST
    @Override
    public boolean existWithId(Long id) {
        return repository.existsById(id);
    }

    @Override
    public boolean existWithUsername(String username) {
        return repository.existsPatientByUsername(username);
    }

    //DELETE
    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteByUsername(String username) {
        repository.deleteByUsername(username);

    }

    @Override
    public void update(Patient patient) {
        repository.save(patient);

    }
}
