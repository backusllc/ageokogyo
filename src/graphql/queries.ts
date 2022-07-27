/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenu = /* GraphQL */ `
  query GetMenu($tenantId: String!, $id: ID!) {
    getMenu(tenantId: $tenantId, id: $id) {
      tenantId
      id
      tenant {
        tenantId
        planId
        plan {
          id
          name
          price
          description
          createdAt
          updatedAt
          tenantId
        }
        status
        contractDate
        billingStartDate
        createdAt
        updatedAt
      }
      icon
      iconPosition
      imageUrl
      label
      order
      parentId
      target
      url
      createdAt
      updatedAt
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $tenantId: String
    $id: ModelIDKeyConditionInput
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMenus(
      tenantId: $tenantId
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        tenantId
        id
        tenant {
          tenantId
          planId
          status
          contractDate
          billingStartDate
          createdAt
          updatedAt
        }
        icon
        iconPosition
        imageUrl
        label
        order
        parentId
        target
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($tenantId: String!) {
    getTenant(tenantId: $tenantId) {
      tenantId
      planId
      plan {
        id
        name
        price
        description
        createdAt
        updatedAt
        tenantId
      }
      status
      contractDate
      billingStartDate
      createdAt
      updatedAt
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $tenantId: String
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTenants(
      tenantId: $tenantId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        tenantId
        planId
        plan {
          id
          name
          price
          description
          createdAt
          updatedAt
          tenantId
        }
        status
        contractDate
        billingStartDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      name
      price
      description
      createdAt
      updatedAt
      tenantId
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $id: ID
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlans(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        price
        description
        createdAt
        updatedAt
        tenantId
      }
      nextToken
    }
  }
`;
