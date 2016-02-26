package com.bluntsoftware.devapptv.modules.devapptv.domain;


import java.io.Serializable;
import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.Date;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.WeakHashMap;
import java.sql.Time;
import java.math.BigDecimal;
import java.math.BigInteger;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.hibernate.proxy.HibernateProxy;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.annotation.*;
                            
@Entity
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
@Table(name = "\"course\"")
public class Course implements CustomDomain<Course> {

    private static final Map< Serializable, Integer > SAVED_HASHES = Collections.synchronizedMap(new WeakHashMap< Serializable, Integer >());
    private volatile Integer hashCode;
    private String name;
    private String owner;
    private Date createdOn;
    private BigDecimal totalCost;
    private Date publishedOn;
    private Integer id = null;

    public Course() { }

    @Column(name = "\"name\"", length = 255)
    public String getName() {
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    @Column(name = "\"owner\"", length = 255)
    public String getOwner() {
        return owner;
    }
    public void setOwner(String owner){
        this.owner = owner;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomTimestampSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"createdOn\"")
    public Date getCreatedOn() {
        return createdOn;
    }
    public void setCreatedOn(Date createdOn){
        this.createdOn = createdOn;
    }

    @Column(precision = 19, scale = 2, name = "\"totalCost\"")
    public BigDecimal getTotalCost() {
        return totalCost;
    }
    public void setTotalCost(BigDecimal totalCost){
        this.totalCost = totalCost;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomTimestampSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"publishedOn\"")
    public Date getPublishedOn() {
        return publishedOn;
    }
    public void setPublishedOn(Date publishedOn){
        this.publishedOn = publishedOn;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "course_id_seq")
    @SequenceGenerator(name = "course_id_seq", allocationSize = 1, sequenceName = "course_id_seq", initialValue = 1)
    @Column(name = "\"id\"")
    public Integer getId() {
        return id;
    }
    public void setId(Integer id){
            if ((this.id == null || this.id == 0) && id != null && hashCode != null) {
        SAVED_HASHES.put(id, hashCode);
        }
        this.id = id;
    }

    @Transient
    public Class<?> getClassType() {
        return Course.class;
    }

    @Override
    public int hashCode() {
          if (hashCode == null) {
            synchronized (this) {
                if (hashCode == null) {
                    if (getId() != null) {
                        hashCode = SAVED_HASHES.get(getId());
                    }
                    if (hashCode == null) {
                        if ( getId() != null && getId() != 0) {
                            hashCode = new Integer(getId().hashCode());
                        } else {
                            hashCode = new Integer(super.hashCode());
                        }
                    }
                }
            }
        }
        return hashCode;
    }

    public int compareTo(Course course) {
        return 0;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        Course entity = (Course)super.clone();
        entity.setId(null);
        return entity;
    }
}