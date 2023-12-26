package contravulnera.woundmaster.controller;

import contravulnera.woundmaster.Service.UserService;
import contravulnera.woundmaster.model.User;
import contravulnera.woundmaster.registrationRequest.UserRegistrationRequest;
import contravulnera.woundmaster.updateRequest.UserUpdateRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/user")
public class UserController {

    private final UserService service;


    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> getPazienti(){
        return service.getAllUsers();
    }

    @GetMapping("{id}")
    public User getPazienteById(@PathVariable("id") Long id){
        return service.getUser(id);
    }

    @GetMapping("/byusername/{username}")
    public User getUserByUsername(@PathVariable("username") String username){
        return service.getUserByUsername(username);
    }

    @PostMapping("/login/{username}/{password}")
    public User getUserByUsernameAndPassword(@PathVariable("username") String username, @PathVariable("password") String password){
        return service.getUserByUsernameAndPassword(username, password);
    }


    @PostMapping()
    public void registerUser(@RequestBody UserRegistrationRequest request){
        service.addUser(request);
    }

    @DeleteMapping("{id}")
    public void deleteuser(@PathVariable("id") Long id){
        service.deleteUserById(id);
    }

    @PutMapping("{id}")
    public void updateUser(
            @PathVariable("id") Long id,
            @RequestBody UserUpdateRequest updateRequest) {
        service.updateUser(id, updateRequest);
    }

}
