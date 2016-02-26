package com.bluntsoftware.devapptv.modules.devapptv.domain;

import com.genx.framework.jpa.domain.Domain;
import java.io.Serializable;

public interface CustomDomain<T> extends Domain,Serializable,Cloneable,Comparable<T> {

}
