searchState.loadedDescShard("query", 0, "Customized <code>ANALYZE</code> plan that aware of MergeScanExec.\nGet an iterator from a primitive array.\nPlanner, QueryEngine implementations based on DataFusion.\nDowncast a temporal array to a specific type\nDummy catalog for region server.\nModule for sorting input data within each <code>PartitionRange</code>.\nA physical plan for window sort(Which is sorting multiple …\nBuild the result <code>DfRecordBatch</code> of <code>ANALYZE</code>\nReturn a reference to Any that can be used for downcasting\nThis function creates the cache object that stores the …\nCreates the output of AnalyzeExec as a RecordBatch\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a <code>PlanMetrics</code> to a <code>JsonMetrics</code> without children.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new DistAnalyzeExec\nAnalyzeExec is handled specially so this value is ignored\nDataFrame represents a logical set of rows with the same …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nProvides support for customising the SQL planner, e.g. to …\nHolds registered external FileFormat implementations …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nNote in SQL queries, aggregate names are looked up using …\nRegister an UDF function. Will override if the function …\nSNAFU context selector for the …\nSNAFU context selector for the <code>InnerError::ConvertSchema</code> …\nSNAFU context selector for the <code>InnerError::Datafusion</code> …\nInner error of datafusion based query engine.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProvides support for customising the SQL planner, e.g. to …\nHolds registered external FileFormat implementations …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nPlanner for convert merge sort logical plan to physical …\nIn logical plan phase it only contains one input\nIf this plan is a placeholder\nMerge sort logical plan for distributed query execution, …\nExtensionPlanner implementation for distributed planner\nMetrics from sub stages\nImplementation of the <code>TreeNodeRewriter</code> trait which is …\nStatus of the rewriter to mark if the current pass is …\ndescend\nascend\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCurrent level in the tree\nPartition columns of the table in current pass\npop one stack item and reduce the level by 1\nReturn true if should stop and expand. The input plan is …\nSimulated stack for the <code>rewrite</code> recursion\nStages to be expanded\nFor unrelated plans like DDL\nReturn true if the given expr and partition cols satisfied …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNanosecond elapsed till the scan operator finished …\nNanosecond elapsed till the first record batch emitted …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGauge for greptime plan execution cost metrics for output\nIn logical plan phase it only contains one input\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a LogicalPlan::Extension node from this merge scan …\nIf this plan is a placeholder\nCount of rows fetched from remote\nNanosecond elapsed till the scan operator is ready to emit …\nMetrics from sub stages\nMergeSort Logical Plan, have same field as <code>Sort</code>, but …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a <code>LogicalPlan::Extension</code> node from this merge sort …\nConvert self to a [<code>Sort</code>] logical plan with same input and …\nTurn <code>Sort</code> into <code>MergeSort</code> if possible\nAn ordinary physical table.\nPlanner for convert merge sort logical plan to physical …\nVisitor to extract table name from logical plan (TableScan …\nIndicates the type of this table for metadata/catalog …\nA transient table.\nA non-materialised table that itself uses a query …\nExtract fully resolved table name from logical plan\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInput logical plan is analyzed. Thus only call logical …\nResolve to the given region (specified by RegionId) …\nA dummy catalog provider for DummyCatalogList.\nA dummy schema provider for DummyCatalogList.\nFor TableProvider and DummyCatalogList\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new provider.\nKeeping a mutable request makes it possible to change in …\nSets the distribution hint of the query to the provider.\nSets the ordering hint of the query to the provider.\nCreates a new catalog list with the given table provider.\nSets the time series selector hint of the query to the …\nSNAFU context selector for the <code>Error::AddSystemTimeOverflow</code>…\nSNAFU context selector for the <code>Error::BuildBackend</code> variant\nSNAFU context selector for the <code>Error::BuildRegex</code> variant\nSNAFU context selector for the <code>Error::Catalog</code> variant\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::ColumnSchemaNoDefault</code>…\nSNAFU context selector for the <code>Error::ConvertSchema</code> variant\nSNAFU context selector for the <code>Error::ConvertSqlType</code> …\nSNAFU context selector for the <code>Error::ConvertSqlValue</code> …\nSNAFU context selector for the <code>Error::CreateRecordBatch</code> …\nSNAFU context selector for the <code>Error::DataFusion</code> variant\nContains the error value\nSNAFU context selector for the <code>Error::GetFulltextOptions</code> …\nSNAFU context selector for the <code>Error::GetRegionMetadata</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::InferSchema</code> variant\nSNAFU context selector for the <code>Error::ListObjects</code> variant\nSNAFU context selector for the <code>Error::MissingRequiredField</code> …\nSNAFU context selector for the …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::MultipleStatements</code> …\nContains the success value\nSNAFU context selector for the <code>Error::ParseFileFormat</code> …\nSNAFU context selector for the <code>Error::ParseFloat</code> variant\nSNAFU context selector for the <code>Error::ParseTimestamp</code> …\nSNAFU context selector for the <code>Error::PlanSql</code> variant\nSNAFU context selector for the <code>Error::QueryAccessDenied</code> …\nSNAFU context selector for the <code>Error::QueryExecution</code> …\nSNAFU context selector for the <code>Error::QueryParse</code> variant\nSNAFU context selector for the <code>Error::QueryPlan</code> variant\nSNAFU context selector for the <code>Error::RangeQuery</code> variant\nSNAFU context selector for the <code>Error::RegionQuery</code> variant\nSNAFU context selector for the <code>Error::Sql</code> variant\nSNAFU context selector for the <code>Error::TableMutation</code> variant\nSNAFU context selector for the <code>Error::TableNotFound</code> variant\nSNAFU context selector for the <code>Error::TableReadOnly</code> variant\nSNAFU context selector for the <code>Error::TimeIndexNotFound</code> …\nSNAFU context selector for the <code>Error::Unimplemented</code> variant\nSNAFU context selector for the <code>Error::UnknownTable</code> variant\nSNAFU context selector for the <code>Error::UnsupportedExpr</code> …\nSNAFU context selector for the <code>Error::UnsupportedVariable</code> …\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExecutor to run [PhysicalPlan].\nSNAFU context selector for the <code>Error::Catalog</code> variant\nSNAFU context selector for the <code>Error::DataFusionPlanning</code> …\nContains the error value\nContains the success value\nSNAFU context selector for the <code>Error::TimeIndexNotFound</code> …\nSNAFU context selector for the <code>Error::UnexpectedLogExpr</code> …\nSNAFU context selector for the <code>Error::Unimplemented</code> variant\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::UnknownScalarFunction</code>…\nSNAFU context selector for the <code>Error::UnknownTable</code> variant\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns filter expressions\nBuilds a single content filter expression\nBuilds filter expressions from content filters for a …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConverts a log expression to a column expression.\nProcess LogExpr recursively.\nA stream to call the callback once a RecordBatch stream is …\nTimer of different stages in query.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAttaches a <code>callback</code> to invoke once the <code>stream</code> is …\n<code>ExtensionAnalyzerRule</code>s transform <code>LogicalPlan</code>s in some way …\nRewrite <code>plan</code>\nA replacement to DataFusion’s <code>CountWildcardRule</code>. This …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDistribute <code>PartitionRange</code>s to each partition.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThis is a <code>PhysicalOptimizerRule</code> to pass distribution …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThis is PhysicalOptimizerRule to remove duplicate physical …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThis rule will traverse the plan to collect necessary …\nTraverse and fetch hints.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe closest order requirement to the leaf node.\nRow selection on time series distribution. This field …\nStringNormalizationRule normalizes(trims) string values in …\nremove extra whitespaces from the String value when there …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTypeConversionRule converts some literal values in logical …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOptimize rule for windowed sort.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRemove <code>CoalesceBatchesExec</code> if the limit is less than the …\nRemoves the repartition plan between the filter and region …\nResolves alias of the time index column.\nThe implementation of the <code>$name_expr</code> extension AST node\nThe implementation of the <code>$name_expr</code> extension AST node\nThe implementation of the <code>$name_expr</code> extension AST node\nThe implementation of the <code>$name_expr</code> extension AST node\nQuery language parser, supports parsing SQL and PromQL\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTry to parse PromQL, return the statement when success.\nTry to parse SQL with GreptimeDB dialect, return the …\nSort input within given PartitionRange\nTopK buffer with row count.\nExplain\ncheck whether the sort column’s min/max value is within …\nPhysical sort expressions(that is, sort by timestamp)\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExecution metrics\nMemory pool for this stream\nInternal method for sorting <code>All</code> buffer (without limit).\nSort and clear the buffer and return the sorted record …\nInternal method for sorting <code>Top</code> buffer (with limit).\nTry to split the input batch if it contains data that …\nTry find data whose value exceeds the current partition …\nwrap physical plan with additional layer e.g: metrics …\nAn ordinary physical table.\nA trait to extract expressions from a logical plan.\nIndicates the type of this table for metadata/catalog …\nA transient table.\nA non-materialised table that itself uses a query …\nGets expressions from a logical plan. It handles Join …\nExtracts and rewrites the table names in the plan in the …\ndescend\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGenerate a relational expression from a SQL expression\nSNAFU context selector for the <code>Error::Catalog</code> variant\nSNAFU context selector for the <code>Error::ColumnNotFound</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::DataFusionPlanning</code> …\nContains the error value\nSNAFU context selector for the <code>Error::ExpectRangeSelector</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::InvalidTimeRange</code> …\nSNAFU context selector for the …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::MultipleVector</code> …\nSNAFU context selector for the <code>Error::NoMetricMatcher</code> …\nContains the success value\nSNAFU context selector for the <code>Error::PromqlPlanNode</code> …\nSNAFU context selector for the <code>Error::TableNameNotFound</code> …\nSNAFU context selector for the <code>Error::TimeIndexNotFound</code> …\nSNAFU context selector for the <code>Error::UnexpectedPlanExpr</code> …\nSNAFU context selector for the <code>Error::UnexpectedToken</code> …\nSNAFU context selector for the <code>Error::UnknownTable</code> variant\nSNAFU context selector for the <code>Error::UnsupportedExpr</code> …\nSNAFU context selector for the <code>Error::UnsupportedMatcherOp</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::ValueNotFound</code> variant\nSNAFU context selector for the <code>Error::ZeroRangeSelector</code> …\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRewrite label values query to DataFusion logical plan.\ndefault value column name for empty metric\nThe UDF that is defined by Datafusion itself.\nUDF that require extra information like range length to be …\nSpecial modifier to project field columns under …\nFunc that doesn’t require input, like <code>time()</code>.\nInterval 1 hour in millisecond\n<code>le</code> column for conventional histogram.\nThreshold for scatter scan mode\n<code>scalar()</code> function in PromQL.\nSpecial modifier for cross schema query\n<code>histogram_quantile</code> function in PromQL\n<code>time()</code> function in PromQL.\n<code>vector</code> function in PromQL\nConvert LabelModifier to Column exprs for aggregation. …\nBuild expr for <code>label_join</code> function\nBuild expr for <code>label_replace</code> function\nCreates a set of DataFusion <code>DfExpr::AggregateFunction</code> …\nSide Effects\nCreate a SPECIAL_HISTOGRAM_QUANTILE plan.\nCreate a SCALAR_FUNCTION plan\nCreate a table scan plan and a filter plan with given …\nCreate a SPECIAL_VECTOR_FUNCTION plan\nCreate DfExpr::WindowFunction expr for each value column …\nGenerate an expr like <code>date_part(&quot;hour&quot;, &lt;TIME_INDEX&gt;)</code>. …\nBuild a filter plan that filter on value column. Notice …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCheck if <code>le</code> is present in tag columns\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if the given op is a comparison operator.\nCheck if the given op is a set operator (UNION, INTERSECT …\nBuild a inner join on time index column and tag columns to …\nUnescapes the value of the matcher\nExtract metric name from <code>__name__</code> matcher and set it into …\nBuild a projection that project and perform operation expr …\nReturn a lambda to build binary expression from token. …\nCreate logical plan for PromQL topk and bottomk expr.\nThe range in millisecond of range selector. None if there …\nReset all planner states\nReset table name and schema to empty\nBuild a set operator (AND/OR/UNLESS)\nSetup PromPlannerContext’s state fields.\nTry to build a f64 from PromExpr.\nTry to build a DataFusion Literal Expression from PromQL …\nThe datafusion <code>[LogicalPlan]</code> decoder.\nExtended …\nDescribe statement result\nQuery engine global state\nReturns the query engine as Any so that it can be downcast …\nDescribe the given <code>LogicalPlan</code>.\nCreate a <code>QueryEngineContext</code>.\nRetrieve the query engine state <code>QueryEngineState</code>\nExecute the given <code>LogicalPlan</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe logical plan for statement\nReturns the query engine name.\nReturns the logical planner\nCreate a DataFrame from a table.\nRegister an aggregate function.\nRegister a SQL function. Will override if the function …\nRegister all functions implemented by GreptimeDB\nThe schema of statement\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a [<code>LogicalPlan</code>] decoder\nThe datafusion <code>[LogicalPlan]</code> decoder.\nExtended …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nQuery engine global state\nRetrieve the aggregate function by name\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOptimize the logical plan by the extension anayzer rules.\nRun the full logical plan optimize phase for the given …\nReturns the <code>ProcedureServiceHandlerRef</code> in state.\nCreate a DataFrame for a table\nRegister an aggregate function.\nRegister an udf function. Will override if the function …\nReturns the <code>TableMutationHandlerRef</code> in state.\nRetrieve aggregate function names.\nRetrieve the udf function by name\nRetrieve udf function names.\nRange function expression.\nthe unit of <code>align</code> is millisecond\nkey: align_ts value: a vector, each element is a range_fn …\nThe input <code>data</code> contains data on a complete time series. If …\nReturns the expressions to pass to the aggregator. It also …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe incoming logical plan\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nuse <code>(ts[i1], data[i1])</code>, <code>(ts[i2], data[i2])</code> as endpoint, …\nkey: <code>(hash of by rows, align_ts)</code> value: <code>[row_ids]</code> It is …\nwith format like <code>max(a) RANGE 300s [FILL NULL]</code>\nIf the <code>FIll</code> strategy is <code>Linear</code> and the output is an …\nThe number of rows of not null rows in the final output\nUse <code>align_to</code> as time origin. According to <code>align</code> as time …\nall range expressions\nby values written by <code>RowWriter</code>\nConverter for the by values\nthe schema of output column\nThe schema before run projection, follow the order of …\nIf the <code>schema</code> of the <code>RangeSelect</code> happens to be the same as …\nkey: time series’s hash value value: time series’s …\nColumn index of TIME INDEX column’s position in the …\n<code>RangeExprRewriter</code> will recursively search certain <code>Expr</code>, …\nIn order to implement RangeSelect query like …\nEvaluate a time calculation expr, case like:\nReturns the argument unchanged.\nReturns the argument unchanged.\nthis function use to find the time_index column and row …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nParse the <code>align to</code> clause and return a UTC timestamp with …\nParse a duraion expr:\nUse <code>BTreeSet</code> to avoid in case like …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA factory to create a <code>RegionQueryHandler</code>.\nBuild a <code>RegionQueryHandler</code> with the given partition …\nSHOW index columns\nThis function checks if the column schemas from a file can …\nCreate a CreateTable statement from table info.\nCast a <code>show</code> statement execution into a query from tables …\nExecute <code>SHOW CHARSET</code> statement and returns the <code>Output</code> if …\nExecute <code>SHOW COLLATION</code> statement and returns the <code>Output</code> if …\nExecute <code>SHOW COLUMNS</code> statement.\nImplementation of <code>SHOW CREATE TABLE</code> statement.\nExecute <code>ShowFlows</code> statement and return the <code>Output</code> if …\nExecute <code>SHOW INDEX</code> statement.\nExecute <code>SHOW REGION</code> statement.\nExecute <code>ShowTableStatus</code> statement and return the <code>Output</code> if …\nExecute <code>ShowTables</code> statement and return the <code>Output</code> if …\nExecute <code>ShowViews</code> statement and return the <code>Output</code> if …\nGenerates CREATE TABLE options from given table metadata …\nCreate a CreateTable statement from table info.\nReturns the primary key columns for <code>SHOW CREATE TABLE</code> …\nSlowQueryTimer is used to log slow query when it’s …\nStatementStatistics is used to collect statistics for a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nslow_query is used to configure slow query log.\nA struct to represent a successive run in the input …\nLeft(<code>start</code>) inclusive right(<code>end</code>) exclusive,\nA complex stream sort execution plan which accepts a list …\nThe core logic of merging sort multiple sorted ranges\nAll available working ranges and their corresponding …\nAll available working ranges and their corresponding …\nResulting Stream(<code>merge_stream</code>)’s batch size, merely a …\nExplain\nmake <code>in_progress</code> as a new <code>DfSendableRecordBatchStream</code> and …\nCompare with options, note None is considered as NULL here\nCompute all working ranges and corresponding working sets …\nPhysical sort expressions(that is, sort by timestamp)\nPhysical sort expressions(that is, sort by timestamp)\nOptional number of rows to fetch. Stops producing rows …\nOptional number of rows to fetch. Stops producing rows …\nFind the slice(where start &lt;= data &lt; end and sort by …\nfind all successive runs in the input iterator\nfirst non-null value in the run\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nreturn a list of non-overlapping (offset, length) which …\nGet the time range of the run, which is [min_val, max_val …\nGet timestamp from array at offset\nGet the current working range\ncurrently assembling RecordBatches, will be put to …\ninput stream assumed reading in order of <code>PartitionRange</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if two ranges are overlapping, exclusive(meaning if …\nWhether this stream is terminated. For reasons like limit …\nlast non-null value in the run\nlast <code>Timestamp</code> of the last input RecordBatch in <code>in_progress</code>…\nlength of the run\nMemory pool for this stream\nThe number of times merge sort has been called\nMerge-sorted result streams, should be polled to end …\nExecution metrics\nExecution metrics\nCreate a new TimeRange, if start is greater than end, swap …\noffset of the first element in the run\nThe core logic of merging sort multiple sorted ranges\nPoll the next RecordBatch from the merge-sort’s output …\nnumber of rows produced\nThe input partition ranges\nThe input ranges indicate input stream will be composed of …\nRemaining number of rows to fetch, if no fetch limit, …\nsorted runs with batch corresponding to them\nOutput Schema, which is the same as input schema, since …\nSet current working range to the next working range\nsorted column from eval sorting expr\nCurrent working set of <code>PartitionRange</code> sorted RecordBatches\nsplit batch to sorted runs\nreturn a map of non-overlapping ranges and their …\nsplit input range by <code>split_by</code> range to one, two or three …\nStart merging sort the current working set\nDuring receiving partial-sorted RecordBatch, we need to …\nTry to concat the input batch to the current <code>in_progress</code> …\nIndex into current <code>working_range</code> in <code>all_avail_working_range</code>")