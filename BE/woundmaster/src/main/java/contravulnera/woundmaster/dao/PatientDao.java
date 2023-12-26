package contravulnera.woundmaster.dao;

import contravulnera.woundmaster.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientDao {

    //GET
    List<Patient> selectAllPatient();
    Optional<Patient> selectPatientById(Long id);
    Optional<Patient> selectPatientByUsername(String username);

    //ADD
    void insert(Patient patient);

    //EXIST
    boolean existWithId(Long id);
    boolean existWithUsername(String username);

    //DELETE
    void deleteById(Long id);
    void deleteByUsername(String username);

    //UPDATE
    void update(Patient patient);

}
