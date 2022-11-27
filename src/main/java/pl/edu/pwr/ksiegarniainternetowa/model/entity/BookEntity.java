package pl.edu.pwr.ksiegarniainternetowa.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BOOKS")
public class BookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Lob
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

    @Column(name = "isbn", length = 20, unique = true)
    private String isbn;

    @Column(name = "releaseNumber")
    private Integer releaseNumber;

    @Column(name = "releaseDate", nullable = false)
    private LocalDateTime releaseDate;

    @Column(name = "size")
    private String size;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "isAvailable", nullable = false)
    private Boolean isAvailable;

    @Column(name = "numOfBookItems", nullable = false)
    private Integer numOfBookItems;

    @Column(name = "numberOfPages", length = 20)
    private String numOfBookPages;

    @Lob
    @Type(type="org.hibernate.type.ImageType")
    @Column(name = "avatar")
    private byte[] avatar;

    @JsonIgnoreProperties(value = {"id", "bookEntity"})
    @OneToMany(mappedBy = "bookEntity")
    private Set<BookAutorshipEntity> authors = new HashSet<>();

    @JsonIgnoreProperties("id")
    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private PublisherEntity publisher;

    @JsonIgnoreProperties("id")
    @ManyToOne
    @JoinColumn(name = "book_category_id")
    private BookCategoryEntity category;

    @JsonIgnoreProperties("id")
    @ManyToOne
    @JoinColumn(name = "language_id")
    private LanguageEntity language;

    @JsonIgnoreProperties("id")
    @ManyToOne
    @JoinColumn(name = "book_cover_id")
    private BookCoverEntity cover;
}
