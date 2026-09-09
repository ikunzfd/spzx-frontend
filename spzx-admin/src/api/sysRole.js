import request from '@/utils/request'

const base_api = '/admin/system/sysRole'

// 角色列表
export const GetSysRoleListByPage = (pageNum,pageSize,queryDto) => {
  return request({
    url: `${base_api}/findByPage/${pageNum}/${pageSize}`,
    method: 'post',
    data: queryDto,
  })
}

export const SaveSysRole = (sysRole) => {
  return request({
    url: `${base_api}/saveSysRole`,
    method: 'post',
    data: sysRole,
  })
}

export const UpdateSysRole = (sysRole) => {
  return request({
    url: `${base_api}/updateSysRole`,
    method: 'put',
    data: sysRole,
  })
}

export const DeleteSysRole = (roleId) => {
  return request({
    url: `${base_api}/deleteById/${roleId}`,
    method: 'delete'
  })
}

// 查询所有的角色数据
export const GetAllRoleList = (userId) => {
    return request({
        url: `/admin/system/sysRole/findAllRoles/${userId}`,
        method: 'get'
    })
}

// 查询指定角色所对应的菜单id
export const GetSysRoleMenuIds = (roleId) => {
    return request({
        url: "/admin/system/sysRoleMenu/findSysRoleMenuByRoleId/"+ roleId,
        method: 'get'
    })
}

// 根据角色分配菜单请求方法
export const DoAssignMenuIdToSysRole = (assignMenuDto) => {
    return request({
        url: "/admin/system/sysRoleMenu/doAssign",
        method: 'post',
        data: assignMenuDto
    })
}