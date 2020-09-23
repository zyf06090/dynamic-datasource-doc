# 动态添加移除数据源

[动态增加删除数据源示例项目](https://gitee.com/baomidou/dynamic-datasource-samples/tree/master/add-remove-datasource-sample)

```java
@RestController
@AllArgsConstructor
@RequestMapping("/datasources")
@Api(tags = "添加删除数据源")
public class LoadController {

  private final DynamicRoutingDataSource ds;
  private final DataSourceCreator dataSourceCreator;
  private final BasicDataSourceCreator basicDataSourceCreator;
  private final JndiDataSourceCreator jndiDataSourceCreator;
  private final DruidDataSourceCreator druidDataSourceCreator;
  private final HikariDataSourceCreator hikariDataSourceCreator;

  @GetMapping
  public Set<String> now() {
    return ds.getCurrentDataSources().keySet();
  }

  @PostMapping("/add") //recommond use this method
  public Set<String> add(@Validated @RequestBody DataSourceDTO dto) {
    DataSourceProperty dataSourceProperty = new DataSourceProperty();
    BeanUtils.copyProperties(dto, dataSourceProperty);
    DataSource dataSource = dataSourceCreator.createDataSource(dataSourceProperty);
    ds.addDataSource(dto.getPollName(), dataSource);
    return ds.getCurrentDataSources().keySet();
  }

  @PostMapping("/addBasic")
  public Set<String> addBasic(@Validated @RequestBody DataSourceDTO dto) {
    DataSourceProperty dataSourceProperty = new DataSourceProperty();
    BeanUtils.copyProperties(dto, dataSourceProperty);
    DataSource dataSource = basicDataSourceCreator.createDataSource(dataSourceProperty);
    ds.addDataSource(dto.getPollName(), dataSource);
    return ds.getCurrentDataSources().keySet();
  }

  @PostMapping("/addJndi")
  public Set<String> addJndi(String pollName, String jndiName) {
    DataSource dataSource = jndiDataSourceCreator.createDataSource(jndiName);
    ds.addDataSource(pollName, dataSource);
    return ds.getCurrentDataSources().keySet();
  }

  @PostMapping("/addDruid")
  public Set<String> addDruid(@Validated @RequestBody DataSourceDTO dto) {
    DataSourceProperty dataSourceProperty = new DataSourceProperty();
    BeanUtils.copyProperties(dto, dataSourceProperty);
    DataSource dataSource = druidDataSourceCreator.createDataSource(dataSourceProperty);
    ds.addDataSource(dto.getPollName(), dataSource);
    return ds.getCurrentDataSources().keySet();
  }

  @PostMapping("/addHikariCP")
  public Set<String> addHikariCP(@Validated @RequestBody DataSourceDTO dto) {
    DataSourceProperty dataSourceProperty = new DataSourceProperty();
    BeanUtils.copyProperties(dto, dataSourceProperty);
    DataSource dataSource = hikariDataSourceCreator.createDataSource(dataSourceProperty);
    ds.addDataSource(dto.getPollName(), dataSource);
    return ds.getCurrentDataSources().keySet();
  }

  @DeleteMapping
  public String removeDatasource(String name) {
    ds.removeDataSource(name);
    return "delete success";
  }
}
```