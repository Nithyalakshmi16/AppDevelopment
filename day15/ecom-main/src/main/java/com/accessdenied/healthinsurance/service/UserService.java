package com.accessdenied.healthinsurance.service;

import java.util.List;

import com.accessdenied.healthinsurance.dto.response.UserResponse;
import com.accessdenied.healthinusrance.dto.request.UserRequest;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
