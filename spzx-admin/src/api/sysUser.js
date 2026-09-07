import request from '@/utils/request'

const base_api = '/admin/system/sysUser'

export const GetSysUserListByPage = (pageNum,pageSize,queryDto) => {
  return request({
    url: `${base_api}/findByPage/${pageNum}/${pageSize}`,
    method: 'get',
    params: queryDto,
  })
}

export const SaveSysUser = (sysUser) => {
    return request({
        url: `${base_api}/saveSysUser`,
        method: 'post',
        data: sysUser,
    })
}

export const UpdateSysUser = (sysUser) => {
    return request({
        url: `${base_api}/updateSysUser`,
        method: 'put',
        data: sysUser,
    })
}

export const DeleteSysUser = (userId) => {
    return request({
        url: `${base_api}/deleteById/${userId}`,
        method: 'delete',
    })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = (assignRoleVo) => {
    return request({
        url: "/admin/system/sysUser/doAssign",
        method: 'post',
        data: assignRoleVo
    })
}