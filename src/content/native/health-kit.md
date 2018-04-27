# HealthKit 


The HealthKit plugin allows you to read data from and write data to the iOS 8+ HealthKit framework.
Any data saved shows up in the iOS Health app and is available for other iOS apps.


Repo: [https://github.com/Telerik-Verified-Plugins/HealthKit](https://github.com/Telerik-Verified-Plugins/HealthKit)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com.telerik.plugins.healthkit
$ npm install --save @ionic-native/health-kit
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { HealthKit } from '@ionic-native/health-kit';


constructor(private healthKit: HealthKit) { }

...
```




<p><br></p>

## Instance Members

### readFitzpatrickSkinType

Output = I|II|III|IV|V|VI|unknown

### available

Check if HealthKit is supported (iOS8+, not on iPad)

### readGender

Output = male|female|other|unknown

### deleteSamples

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### checkAuthStatus

Pass in a type and get back on of undetermined | denied | authorized

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### readWeight

Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### queryCorrelationType

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### findWorkouts

no params yet, so this will return all workouts ever of any type

### monitorSampleType

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### saveCorrelation

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### readDateOfBirth

Formatted as yyyy-MM-dd

### querySampleTypeAggregated

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### readBloodType

Output = A+|A-|B+|B-|AB+|AB-|O+|O-|unknown

### querySampleType

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### readHeight

Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### requestAuthorization

Ask some or all permissions up front

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### saveHeight

Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### saveQuantitySample

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### saveWeight

Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### saveWorkout

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

### sumQuantityType

undefined

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HealthKitOptions</code></dt>
<dd>See HealthKitOptions table below</dd>
</dl>

<p><br></p>

## HealthKitOptions

<dl>
<dt><h4>activityType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>HKWorkoutActivityType constant
Read more here: https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType <span class="tag">optional</span></dd><dt><h4>aggregation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>'hour', 'week', 'year' or 'day', default 'day' <span class="tag">optional</span></dd><dt><h4>amount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>ascending</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>specifies if the data returned by querySampleType() should be sorted by
end date in ascending order, default is false <span class="tag">optional</span></dd><dt><h4>correlationType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>date</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>distance</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>distanceUnit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>probably useful with the former param <span class="tag">optional</span></dd><dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>in seconds, optional, use either this or endDate <span class="tag">optional</span></dd><dt><h4>endDate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>energy</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>energyUnit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>J|cal|kcal <span class="tag">optional</span></dd><dt><h4>extraData</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>limits the maximum number of records returned by querySampleType() <span class="tag">optional</span></dd><dt><h4>metadata</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>quantityType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>readTypes</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>requestReadPermission</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>requestWritePermission</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>sampleType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>samples</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>startDate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>unit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>m|cm|mm|in|ft <span class="tag">optional</span></dd><dt><h4>writeTypes</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

