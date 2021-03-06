package com.bluntsoftware.devapptv.modules.user_manager.domain;


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
@Table(name = "\"APPLICATION_USER\"")
public class ApplicationUser implements CustomDomain<ApplicationUser> {

    private static final Map< Serializable, Integer > SAVED_HASHES = Collections.synchronizedMap(new WeakHashMap< Serializable, Integer >());
    private volatile Integer hashCode;
    private Integer id = null;
    private Boolean activated;
    private String activationKey;
    private String email;
    private String firstName;
    private String langKey;
    private String lastName;
    private String login;
    private String tenantId;
    private String password;

    public ApplicationUser() { }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomBooleanSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"activated\"")
    public Boolean getActivated() {
        return activated;
    }
    public void setActivated(Boolean activated){
        this.activated = activated;
    }

    @Column(name = "\"activation_key\"", length = 20)
    public String getActivationKey() {
        return activationKey;
    }
    public void setActivationKey(String activationKey){
        this.activationKey = activationKey;
    }

    @Column(name = "\"email\"", length = 50)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    @Column(name = "\"first_name\"", length = 50)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    @Column(name = "\"lang_key\"", length = 5)
    public String getLangKey() {
        return langKey;
    }
    public void setLangKey(String langKey){
        this.langKey = langKey;
    }

    @Column(name = "\"last_name\"", length = 50)
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    @Column(name = "\"login\"", length = 50)
    public String getLogin() {
        return login;
    }
    public void setLogin(String login){
        this.login = login;
    }

    @Column(name = "\"tenant_id\"", length = 50)
    public String getTenantId() {
        return tenantId;
    }
    public void setTenantId(String tenantId){
        this.tenantId = tenantId;
    }

    @Column(name = "\"password\"", length = 100)
    public String getPassword() {
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }

    @Transient
    public Class<?> getClassType() {
        return ApplicationUser.class;
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

    public int compareTo(ApplicationUser applicationUser) {
        return 0;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        ApplicationUser entity = (ApplicationUser)super.clone();
        entity.setId(null);
        return entity;
    }
}