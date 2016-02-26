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
@Table(name = "\"video\"")
public class Video implements CustomDomain<Video> {

    private static final Map< Serializable, Integer > SAVED_HASHES = Collections.synchronizedMap(new WeakHashMap< Serializable, Integer >());
    private volatile Integer hashCode;
    private Integer id = null;
    private Date createdOn;
    private String owner;
    private String url;
    private BigDecimal individualCost;
    private String duration;
    private Artist artist;

    public Video() { }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "video_id_seq")
    @SequenceGenerator(name = "video_id_seq", allocationSize = 1, sequenceName = "video_id_seq", initialValue = 1)
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

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomTimestampSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"createdOn\"")
    public Date getCreatedOn() {
        return createdOn;
    }
    public void setCreatedOn(Date createdOn){
        this.createdOn = createdOn;
    }

    @Column(name = "\"owner\"", length = 255)
    public String getOwner() {
        return owner;
    }
    public void setOwner(String owner){
        this.owner = owner;
    }

    @Column(name = "\"url\"", length = 255)
    public String getUrl() {
        return url;
    }
    public void setUrl(String url){
        this.url = url;
    }

    @Column(precision = 19, scale = 2, name = "\"individualCost\"")
    public BigDecimal getIndividualCost() {
        return individualCost;
    }
    public void setIndividualCost(BigDecimal individualCost){
        this.individualCost = individualCost;
    }

    @Column(name = "\"duration\"", length = 255)
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration){
        this.duration = duration;
    }

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE})
    @JoinColumn(name = "\"artist\"", nullable = true )
    public Artist getArtist() {
        return artist;
    }
    public void setArtist(Artist artist){
        this.artist = artist;
    }

    @Transient
    public Class<?> getClassType() {
        return Video.class;
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

    public int compareTo(Video video) {
        return 0;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        Video entity = (Video)super.clone();
        entity.setId(null);
        return entity;
    }
}