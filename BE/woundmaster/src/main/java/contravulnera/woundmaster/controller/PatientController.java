package contravulnera.woundmaster.controller;

import contravulnera.woundmaster.Service.PatientService;
import contravulnera.woundmaster.model.Patient;
import contravulnera.woundmaster.registrationRequest.PatientRegistrationRequest;
import contravulnera.woundmaster.updateRequest.PatientUpdateRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/patient")
public class PatientController {

    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    //List
    @GetMapping
    public List<Patient> getAll(){
        return service.getAll();
    }

    //get
    @GetMapping("{id}")
    public Patient getById(@PathVariable("id") Long id){
        return service.getById(id);
    }

    @GetMapping("/byusername/{username}")
    public Patient getByUsername(@PathVariable("username") String username){
        return service.getByUsername(username);
    }

    //add
    @PostMapping
    public void insert(@RequestBody PatientRegistrationRequest request){
        service.add(request);
    }
    //delete
    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Long id){
        service.deleteById(id);
    }

    //update
    @PutMapping("{id}")
    public void update(@PathVariable("id") Long id, @RequestBody PatientUpdateRequest updateRequest){
        service.update(id, updateRequest);
    }
}
