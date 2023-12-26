package contravulnera.woundmaster.repository;

import contravulnera.woundmaster.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsUserByUsername(String username);
    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);


}
