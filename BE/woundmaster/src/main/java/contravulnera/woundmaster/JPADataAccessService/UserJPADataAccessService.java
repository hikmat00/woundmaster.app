package contravulnera.woundmaster.JPADataAccessService;

import contravulnera.woundmaster.dao.UserDao;
import contravulnera.woundmaster.model.User;
import contravulnera.woundmaster.repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("jpa")
public class UserJPADataAccessService implements UserDao {

    private final UserRepository repository;

    public UserJPADataAccessService(UserRepository repository) {
        this.repository = repository;
    }

    //GET USER
    @Override
    public List<User> selectAllUsers() {
        return repository.findAll();
    }

    @Override
    public Optional<User> selectUserById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<User> selectUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public Optional<User> selectUserByUsernameAndPassword(String username, String password) {
        return repository.findByUsernameAndPassword(username, password);
    }

    //ADD USER
    @Override
    public void insertUser(User user) {
        repository.save(user);
    }

    //EXIST USER
    @Override
    public boolean existUserWithId(Long id) {
        return repository.existsById(id);
    }

    @Override
    public boolean existUserWithUsername(String username) {
        return repository.existsUserByUsername(username);
    }

    //DELETE USER
    @Override
    public void deleteUserById(Long id) {
        repository.deleteById(id);
    }

    //UPDATE USER
    @Override
    public void updateUser(User update) {
        repository.save(update);
    }

}
