export enum JWTTokenStatus {
  VALID = 'V',
  EXPIRED = 'E',
  INVALID = 'X'
}

const validateToken = (token: string): JWTTokenStatus => {
  if (token?.length <= 0) {
    return JWTTokenStatus.INVALID;
  }

  const tokenClaimsChunk = token.split('.')[1];
  if (tokenClaimsChunk?.length <= 0) {
    return JWTTokenStatus.INVALID;
  }

  try {
    const decodedToken = atob(tokenClaimsChunk);
    const tokenClaims = JSON.parse(decodedToken);

    if (!tokenClaims.exp) {
      return JWTTokenStatus.INVALID;
    }

    if (Date.now() > (tokenClaims.exp * 1000)) {
      return JWTTokenStatus.EXPIRED;
    }
  } catch (e) {
    return JWTTokenStatus.INVALID;
  }

  return JWTTokenStatus.VALID;
}

export function checkToken(token: string): JWTTokenStatus {
  return validateToken(token);
}
