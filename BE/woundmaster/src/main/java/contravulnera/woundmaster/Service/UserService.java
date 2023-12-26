package contravulnera.woundmaster.Service;

import contravulnera.woundmaster.dao.UserDao;
import contravulnera.woundmaster.exception.DuplicateResourceException;
import contravulnera.woundmaster.exception.RequestValidationException;
import contravulnera.woundmaster.exception.ResourceNotFoundException;
import contravulnera.woundmaster.model.User;
import contravulnera.woundmaster.registrationRequest.UserRegistrationRequest;
import contravulnera.woundmaster.updateRequest.UserUpdateRequest;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserDao userDao;

    public UserService(@Qualifier("jpa") UserDao userDao) {
        this.userDao = userDao;
    }

    //List
    public List<User> getAllUsers() {
        return userDao.selectAllUsers();
    }

    //getUser
    public User getUser(Long id) {
        return userDao.selectUserById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "utente con id [%s] non trovato".formatted(id)
                ));
    }

    public User getUserByUsername(String username) {
        return userDao.selectUserByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "utente non trovato"
                ));
    }

    public User getUserByUsernameAndPassword(String username, String password){
        return userDao.selectUserByUsernameAndPassword(username, password)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "username o password non validi"
                ));
    }



    public void addUser(UserRegistrationRequest userRegistrationRequest) {

        String username = userRegistrationRequest.username();
        if (userDao.existUserWithUsername(username)) {
            throw new DuplicateResourceException(
                    "username è già presente"
            );
        }
        User user= new User(
                userRegistrationRequest.username(),
                userRegistrationRequest.password(),
                "operatore"
        );
       userDao.insertUser(user);
    }


    public void deleteUserById(Long id) {
        if (!userDao.existUserWithId(id)) {
            throw new ResourceNotFoundException(
                    "utente con id [%s] non è presente".formatted(id)
            );
        };
        userDao.deleteUserById(id);
    }

    public void updateUser(Long id, UserUpdateRequest updateRequest){
        User user = getUser(id);

        boolean changes = false;

        if(updateRequest.username() != null && !updateRequest.username().equals(user.getUsername())) {

            if (userDao.existUserWithUsername(updateRequest.username())) {

                throw new DuplicateResourceException(
                        "username è già presente"
                );
            }
            user.setUsername(updateRequest.username());
            changes = true;
        }

        if(updateRequest.password()!= null && !updateRequest.password().equals(user.getPassword() )) {
            user.setPassword(updateRequest.password());
            changes = true;
        }

        if(updateRequest.ruolo()!= null && !updateRequest.ruolo().equals(user.getRuolo())) {
            user.setRuolo(updateRequest.ruolo());
            changes = true;
        }


        if(!changes) {
            throw  new RequestValidationException("Nessuna modifica ai dati trovata");
        }

        userDao.updateUser(user);

    }
}
