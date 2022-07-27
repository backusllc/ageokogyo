/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMenuInput = {
  tenantId: string,
  id?: string | null,
  icon?: string | null,
  iconPosition?: string | null,
  imageUrl?: string | null,
  label: string,
  order: number,
  parentId?: string | null,
  target: boolean,
  url: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMenuConditionInput = {
  icon?: ModelStringInput | null,
  iconPosition?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  label?: ModelStringInput | null,
  order?: ModelIntInput | null,
  parentId?: ModelStringInput | null,
  target?: ModelBooleanInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Menu = {
  __typename: "Menu",
  tenantId: string,
  id: string,
  tenant?: Tenant | null,
  icon?: string | null,
  iconPosition?: string | null,
  imageUrl?: string | null,
  label: string,
  order: number,
  parentId?: string | null,
  target: boolean,
  url: string,
  createdAt: string,
  updatedAt: string,
};

export type Tenant = {
  __typename: "Tenant",
  tenantId: string,
  planId?: string | null,
  plan: Plan,
  status: TalentStatus,
  contractDate: string,
  billingStartDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Plan = {
  __typename: "Plan",
  id: string,
  name: string,
  price: number,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  tenantId?: string | null,
};

export enum TalentStatus {
  Active = "Active",
  Disabled = "Disabled",
}


export type UpdateMenuInput = {
  tenantId: string,
  id: string,
  icon?: string | null,
  iconPosition?: string | null,
  imageUrl?: string | null,
  label?: string | null,
  order?: number | null,
  parentId?: string | null,
  target?: boolean | null,
  url?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMenuInput = {
  tenantId: string,
  id: string,
};

export type CreateTenantInput = {
  tenantId: string,
  planId?: string | null,
  status: TalentStatus,
  contractDate: string,
  billingStartDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTenantConditionInput = {
  planId?: ModelIDInput | null,
  status?: ModelTalentStatusInput | null,
  contractDate?: ModelStringInput | null,
  billingStartDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTenantConditionInput | null > | null,
  or?: Array< ModelTenantConditionInput | null > | null,
  not?: ModelTenantConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTalentStatusInput = {
  eq?: TalentStatus | null,
  ne?: TalentStatus | null,
};

export type UpdateTenantInput = {
  tenantId: string,
  planId?: string | null,
  status?: TalentStatus | null,
  contractDate?: string | null,
  billingStartDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTenantInput = {
  tenantId: string,
};

export type CreatePlanInput = {
  id?: string | null,
  name: string,
  price: number,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPlanConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlanConditionInput | null > | null,
  or?: Array< ModelPlanConditionInput | null > | null,
  not?: ModelPlanConditionInput | null,
};

export type UpdatePlanInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePlanInput = {
  id: string,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMenuFilterInput = {
  tenantId?: ModelStringInput | null,
  id?: ModelIDInput | null,
  icon?: ModelStringInput | null,
  iconPosition?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  label?: ModelStringInput | null,
  order?: ModelIntInput | null,
  parentId?: ModelStringInput | null,
  target?: ModelBooleanInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelTenantFilterInput = {
  tenantId?: ModelStringInput | null,
  planId?: ModelIDInput | null,
  status?: ModelTalentStatusInput | null,
  contractDate?: ModelStringInput | null,
  billingStartDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTenantFilterInput | null > | null,
  or?: Array< ModelTenantFilterInput | null > | null,
  not?: ModelTenantFilterInput | null,
};

export type ModelTenantConnection = {
  __typename: "ModelTenantConnection",
  items:  Array<Tenant | null >,
  nextToken?: string | null,
};

export type ModelPlanFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlanFilterInput | null > | null,
  or?: Array< ModelPlanFilterInput | null > | null,
  not?: ModelPlanFilterInput | null,
};

export type ModelPlanConnection = {
  __typename: "ModelPlanConnection",
  items:  Array<Plan | null >,
  nextToken?: string | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTenantMutationVariables = {
  input: CreateTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type CreateTenantMutation = {
  createTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTenantMutationVariables = {
  input: UpdateTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type UpdateTenantMutation = {
  updateTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTenantMutationVariables = {
  input: DeleteTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type DeleteTenantMutation = {
  deleteTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlanMutationVariables = {
  input: CreatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type CreatePlanMutation = {
  createPlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};

export type UpdatePlanMutationVariables = {
  input: UpdatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type UpdatePlanMutation = {
  updatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};

export type DeletePlanMutationVariables = {
  input: DeletePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type DeletePlanMutation = {
  deletePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  tenantId: string,
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  tenantId?: string | null,
  id?: ModelIDKeyConditionInput | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      tenantId: string,
      id: string,
      tenant?:  {
        __typename: "Tenant",
        tenantId: string,
        planId?: string | null,
        status: TalentStatus,
        contractDate: string,
        billingStartDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      icon?: string | null,
      iconPosition?: string | null,
      imageUrl?: string | null,
      label: string,
      order: number,
      parentId?: string | null,
      target: boolean,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTenantQueryVariables = {
  tenantId: string,
};

export type GetTenantQuery = {
  getTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTenantsQueryVariables = {
  tenantId?: string | null,
  filter?: ModelTenantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTenantsQuery = {
  listTenants?:  {
    __typename: "ModelTenantConnection",
    items:  Array< {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlanQueryVariables = {
  id: string,
};

export type GetPlanQuery = {
  getPlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};

export type ListPlansQueryVariables = {
  id?: string | null,
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlansQuery = {
  listPlans?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMenuSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    tenantId: string,
    id: string,
    tenant?:  {
      __typename: "Tenant",
      tenantId: string,
      planId?: string | null,
      plan:  {
        __typename: "Plan",
        id: string,
        name: string,
        price: number,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        tenantId?: string | null,
      },
      status: TalentStatus,
      contractDate: string,
      billingStartDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    icon?: string | null,
    iconPosition?: string | null,
    imageUrl?: string | null,
    label: string,
    order: number,
    parentId?: string | null,
    target: boolean,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTenantSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnCreateTenantSubscription = {
  onCreateTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTenantSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnUpdateTenantSubscription = {
  onUpdateTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTenantSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnDeleteTenantSubscription = {
  onDeleteTenant?:  {
    __typename: "Tenant",
    tenantId: string,
    planId?: string | null,
    plan:  {
      __typename: "Plan",
      id: string,
      name: string,
      price: number,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantId?: string | null,
    },
    status: TalentStatus,
    contractDate: string,
    billingStartDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlanSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnCreatePlanSubscription = {
  onCreatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};

export type OnUpdatePlanSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnUpdatePlanSubscription = {
  onUpdatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};

export type OnDeletePlanSubscriptionVariables = {
  tenantId?: string | null,
};

export type OnDeletePlanSubscription = {
  onDeletePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    price: number,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantId?: string | null,
  } | null,
};
