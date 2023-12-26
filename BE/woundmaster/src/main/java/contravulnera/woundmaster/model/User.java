package contravulnera.woundmaster.model;

import jakarta.persistence.*;

@Entity
@Table( name = "user",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "user_username_unique",
                        columnNames = "username"
                )
        }
)
public class User {
    @Id
    @SequenceGenerator(
            name = "user_id_seq",
            sequenceName = "user_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "user_id_seq"
    )
    private Long id;

    @Column( nullable = false)
    private String username;

    @Column( nullable = false)
    private String password;

    @Column( nullable = false)
    private String ruolo;


    public User(String username, String password, String ruolo) {
        this.username = username;
        this.password = password;
        this.ruolo = ruolo;
    }

    public User(Long id, String username, String ruolo) {
        this.id = id;
        this.username = username;
        this.ruolo = ruolo;
    }
    public User(String username, String ruolo) {
        this.username = username;
        this.ruolo = ruolo;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public String getRuolo() {
        return ruolo;
    }

    public void setRuolo(String ruolo) {
        this.ruolo = ruolo;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
