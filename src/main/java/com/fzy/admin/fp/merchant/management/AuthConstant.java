package com.fzy.admin.fp.merchant.management;

import cn.hutool.cache.Cache;
import cn.hutool.cache.CacheUtil;
import com.fzy.admin.fp.merchant.management.domain.MerchantUser;
import com.fzy.admin.fp.merchant.management.domain.MerchantUser;

import java.util.List;

/**
 * @author Created by zk on 2019-01-02 16:48
 * @description
 */
public interface AuthConstant {

    //创建用户基本信息缓存,采用最少使用率策略,当缓存溢出时丢弃使用次数最少的数据
    Cache<String, MerchantUser> loginCache = CacheUtil.newLFUCache(1000);
    //创建用户权限信息缓存,采用最少使用率策略,当缓存溢出时丢弃使用次数最少的数据
    Cache<String, List<String>> authenticationCache = CacheUtil.newLFUCache(1000);

    /**
     * 页面类型权限
     */
    Integer PERMISSION_PAGE = 0;

    /**
     * 操作类型权限
     */
    Integer PERMISSION_OPERATION = 1;

    /**
     * 1级菜单
     */
    Integer LEVEL_ONE = 1;//模块

    /**
     * 2级菜单
     */
    Integer LEVEL_TWO = 2;//具体页面

    /**
     * 3级菜单
     */
    Integer LEVEL_THREE = 3;//具体操作

    String AUTH_NAME = "merchant";//用于填充本模块中JWT的ISS
}
