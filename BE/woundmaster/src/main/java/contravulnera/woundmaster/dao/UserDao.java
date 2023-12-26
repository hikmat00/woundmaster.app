package contravulnera.woundmaster.dao;

import contravulnera.woundmaster.model.User;

import java.util.List;
import java.util.Optional;

public interface UserDao {

    //GET USER
    List<User> selectAllUsers();
    Optional<User> selectUserById(Long id);
    Optional<User> selectUserByUsername(String username);
    Optional<User> selectUserByUsernameAndPassword(String username, String password);

    //ADD USER
    void insertUser(User user);

    //EXIST USER
    boolean existUserWithId(Long id);
    boolean existUserWithUsername(String username);

    //DELETE USER
    void deleteUserById(Long id);

    //UPDATE USER
    void updateUser(User update);


}
