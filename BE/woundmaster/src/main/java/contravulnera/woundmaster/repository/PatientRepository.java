package contravulnera.woundmaster.repository;

import contravulnera.woundmaster.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    //exists
    boolean existsPatientByUsername(String username);
    boolean existsById(Long id);
    //FIND BY USERNAME
    Optional<Patient> findByUsername(String username);

    //DELETE
    void deleteByUsername(String username);

}
