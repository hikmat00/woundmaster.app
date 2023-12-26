package contravulnera.woundmaster.updateRequest;

import org.springframework.cglib.core.Local;

import java.time.LocalDate;

public record PatientUpdateRequest(String username, String genre, LocalDate dataNascita, LocalDate dataRegistrazione) { }
