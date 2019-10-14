// 添加用户
const addUser_config = {
    values: [{
            msg: '请输入用户名',
            name: 'username',
            placeholder: '请输入用户名',
            type: 'input'
        },
        {
            msg: '请输入密码',
            name: 'password',
            placeholder: '请输入密码',
            type: 'input'
        },
        {
            name: 'identity_id',
            placeholder: '请选择身份id',
            type: 'select',
            main: ['管理员', '主界面']
        }
    ]
};

// 更新用户
const updateUser_config = {
    values: [{
            name: 'identity_id',
            placeholder: '请选择身份id',
            type: 'select',
            main: ['管理员', '主界面']
        },
        {
            msg: '请输入用户名',
            name: 'username',
            placeholder: '请输入用户名',
            type: 'input'
        },
        {
            msg: '请输入密码',
            name: 'password',
            placeholder: '请输入密码',
            type: 'input'
        },
        {
            name: 'identity_id',
            placeholder: '请选择身份id',
            type: 'select',
            main: ['管理员', '主界面']
        }
    ]
};

// 添加身份
const identity_config = {
    headerTitle: '添加身份',
    values: [{
        msg: '请输入身份',
        name: 'identity',
        placeholder: '请输入身份名称',
        type: 'input'
    }]
};

// 添加接口api接口权限
const api_port_config = {
    headerTitle: '添加api接口权限',
    values: [{
            msg: '请输入api接口权限名称',
            name: 'api_name',
            placeholder: '请输入api接口权限名称',
            type: 'input'
        },
        {
            msg: '请输入api接口权限url',
            name: 'api_url',
            placeholder: '请输入api接口权限url',
            type: 'input'
        },
        {
            msg: '请输入api接口权限方法',
            name: 'api_method',
            placeholder: '请输入api接口权限方法',
            type: 'input'
        }
    ]
};

// 添加视图接口权限
const view_config = {
    headerTitle: '添加视图接口权限',
    values: [{
        name: 'view',
        placeholder: '请选择视图',
        type: 'select',
        main: ['登录', '主界面']
    }]
};

// 身份设置api接口权限
const setApi_config = {
    headerTitle: '给身份设置api接口权限',
    values: [{
            name: 'identity_id',
            placeholder: '请选择身份id',
            type: 'select',
            main: ['管理员', '主界面']
        },
        {
            name: 'api_view',
            placeholder: '请选择api接口权限',
            type: 'select',
            main: ['管理员', '主界面']
        }
    ]
};

// 身份设置视图权限
const setView_config = {
    headerTitle: '给身份设置视图权限',
    values: [{
            name: 'identity_id',
            placeholder: '请选择身份id',
            type: 'select',
            main: ['管理员', '主界面']
        },
        {
            name: 'view_id',
            placeholder: '请选择视图权限id',
            type: 'select',
            main: ['管理员', '主界面']
        }
    ]
};

export {
    identity_config,
    api_port_config,
    view_config,
    setApi_config,
    setView_config,
    addUser_config,
    updateUser_config
};