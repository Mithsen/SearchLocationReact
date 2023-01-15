# SearchLocationReact

## Setting environment variable

1. Create .env file in the root directory.
2. Open the .env file
2. Add an environment variable called "GOOGLE_MAPS_APIKEY", example: 
        GOOGLE_MAPS_APIKEY='<API_KEY>'
3. Save the .env file.


## For Android

### Specify your Google Maps API key

Add your API key to your manifest file (`android/app/src/main/AndroidManifest.xml`):

```xml
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```
