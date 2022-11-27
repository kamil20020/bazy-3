package pl.edu.pwr.ksiegarniainternetowa.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BOOKAUTHORS")
public class BookAuthorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname", length = 32, nullable = false)
    private String firstname;

    @Column(name = "surname", length = 32, nullable = false)
    private String surname;

    @OneToMany(mappedBy = "bookAuthorEntity")
    private Set<BookAutorshipEntity> bookAutorshipEntities = new HashSet<>();
}
