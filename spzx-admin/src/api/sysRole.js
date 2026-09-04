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