package contravulnera.woundmaster.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.springframework.context.annotation.EnableMBeanExport;

import java.time.LocalDate;

@Entity
@Table( name = "patient", uniqueConstraints = {@UniqueConstraint( name = "patient_username_unique", columnNames = "username")})
public class Patient {
    @Id
    @SequenceGenerator( name = "patient_id_seq", sequenceName = "patient_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "patient_id_seq")
    private Long id;

    @Column( nullable = false)
    private String username;

    @Column( nullable = false)
    private String genre;

    @Column( nullable = false)
    private LocalDate dataNascita;
    @Column( nullable = false)
    private LocalDate dataRegistrazione;

    @ManyToOne
    @JoinColumn(name = "codUser", nullable = false)
    private User user;

    public Patient() {
    }

    public Patient(String username, String genre, LocalDate dataNascita, LocalDate dataRegistrazione, User user) {
        this.username = username;
        this.genre = genre;
        this.dataNascita = dataNascita;
        this.dataRegistrazione = dataRegistrazione;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public LocalDate getDataRegistrazione() {
        return dataRegistrazione;
    }

    public void setDataRegistrazione(LocalDate dataRegistrazione) {
        this.dataRegistrazione = dataRegistrazione;
    }

    public User getUser() {
        return user;
    }

    public LocalDate getDataNascita() {
        return dataNascita;
    }

    public void setDataNascita(LocalDate dataNascita) {
        this.dataNascita = dataNascita;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
