package lab1.backend.repository;

import lab1.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // This method is required to check credentials during Login
    Optional<User> findByUsername(String username);
}
