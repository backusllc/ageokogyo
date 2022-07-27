/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
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
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
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
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
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
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
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
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
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
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
