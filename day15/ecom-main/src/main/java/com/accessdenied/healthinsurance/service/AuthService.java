package com.accessdenied.healthinsurance.service;

import com.accessdenied.healthinsurance.dto.response.AuthenticationResponse;
import com.accessdenied.healthinusrance.dto.request.AuthenticationRequest;
import com.accessdenied.healthinusrance.dto.request.RegisterRequest;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
