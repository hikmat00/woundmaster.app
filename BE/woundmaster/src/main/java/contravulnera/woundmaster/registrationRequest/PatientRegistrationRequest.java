package contravulnera.woundmaster.registrationRequest;

import contravulnera.woundmaster.model.User;

import java.time.LocalDate;

public record PatientRegistrationRequest(
        String username, String genre,LocalDate dataNascita, String userUsername
) {
}
