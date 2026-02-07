package lab1.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data // Automatically generates getters, setters, and toString
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID; // Matches ERD PK

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "middle_name")
    private String middleName;

    private String username;

    // Use passwordHash to match your ERD.
    // BCrypt hashes are 60 chars, so we use length 255 for safety.
    @Column(name = "password_hash", length = 255)
    private String passwordHash;

    private String role;
    private Integer age;
}