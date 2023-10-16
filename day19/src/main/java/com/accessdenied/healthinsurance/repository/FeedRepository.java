package com.accessdenied.healthinsurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.accessdenied.healthinsurance.model.*;



@Repository
public interface FeedRepository extends JpaRepository<Feed, Long> {

}



