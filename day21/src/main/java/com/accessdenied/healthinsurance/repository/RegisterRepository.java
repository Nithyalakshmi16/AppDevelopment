

package com.accessdenied.healthinsurance.repository;

import com.accessdenied.healthinsurance.model.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterRepository extends JpaRepository<RegisterUser, Long> {
}
