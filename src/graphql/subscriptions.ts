/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu($tenantId: String) {
    onCreateMenu(tenantId: $tenantId) {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu($tenantId: String) {
    onUpdateMenu(tenantId: $tenantId) {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu($tenantId: String) {
    onDeleteMenu(tenantId: $tenantId) {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant($tenantId: String) {
    onCreateTenant(tenantId: $tenantId) {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant($tenantId: String) {
    onUpdateTenant(tenantId: $tenantId) {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant($tenantId: String) {
    onDeleteTenant(tenantId: $tenantId) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($tenantId: String) {
    onCreatePlan(tenantId: $tenantId) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($tenantId: String) {
    onUpdatePlan(tenantId: $tenantId) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($tenantId: String) {
    onDeletePlan(tenantId: $tenantId) {
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
